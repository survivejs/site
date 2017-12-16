/**
import styled from "react-emotion";
import theme from "../styles/theme";
const Container = styled("div")`
  color: deepskyblue;
  margin-bottom: ${theme.space.xl};
`;

→

import styled from "react-emotion";
import theme from "../styles/theme";
const Container = styled("div")`
  color: deepskyblue;
  margin-bottom: 64px;
`;
*/

const { dirname, resolve } = require("path");
const dlv = require("dlv");

const VAR_NAME = "theme";

let values = {};

function buildTemplateElement(path, value, t) {
  const parentPath = path.parentPath;

  const quasis = parentPath.node.quasis;
  const newQuasis = [];
  let i = 0;
  while (i < quasis.length) {
    const q = quasis[i];
    const next = quasis[i + 1];
    if (next && (path.node.start > q.end, path.node.end < next.start)) {
      // Inline expression between two quasis:
      // quasi + expression value + next quasi
      newQuasis.push(
        t.templateElement({
          raw: q.value.raw + value + next.value.raw,
          cooked: q.value.cooked + value + next.value.cooked,
        })
      );
      i += 2;
    } else {
      newQuasis.push(q);
    }
    i++;
  }

  const expressions = parentPath.node.expressions;
  const newExpressions = expressions.filter(x => x === path);

  return t.templateLiteral(newQuasis, newExpressions);
}

function loadValues(path, sourceDir) {
  const relativePath = path.node.source.value;
  const absolutePath = resolve(sourceDir, relativePath);
  values = require(absolutePath);
}

function plugin(babel) {
  const t = babel.types;

  return {
    name: "theme",
    visitor: {
      Program(programPath, state) {
        const sourceDir = dirname(state.file.opts.filename);
        programPath.traverse({
          ImportDeclaration(path) {
            if (
              t.isImportDefaultSpecifier(path.node.specifiers[0]) &&
              path.node.specifiers[0].local.name === VAR_NAME
            ) {
              loadValues(path, sourceDir);
            }
          },
          MemberExpression(path) {
            if (
              path.node.object.object &&
              path.node.object.object.name === VAR_NAME
            ) {
              const addr = state.file.code.substring(
                path.node.start + VAR_NAME.length + 1,
                path.node.end
              );
              // TODO: Error handling
              const value = dlv(values, addr).toString();
              if (t.isTemplateLiteral(path.parent)) {
                path.parentPath.replaceWith(
                  buildTemplateElement(path, value, t)
                );
              } else {
                path.replaceWith(t.valueToNode(value));
              }
            }
          },
        });
      },
    },
  };
}

module.exports = plugin;
