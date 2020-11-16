---
title: "Managing css-in-js Components with Namespaces"
date: 2019-03-19
headerImage: "assets/img/headers/car.jpg"
keywords: ["cssinjs", "react", "styling"]
---

I've settled on using [Emotion](https://emotion.sh/) for styling my React applications. The API is close to [styled-components](https://www.styled-components.com/) and especially Emotion 10 is filled with functionality. I use only a small part of it in my daily work.

As I've been working on the print graphics for [React Finland](https://react-finland.fi/), I've often come across the problem of maintaining different versions of designs in my files. I've found a way to solve this.

## Objects as Namespaces for css-in-js Components

Let's say I have basic styled components for a speaker/attendee badge like this:

```javascript
const Badge = {
  layout: {
    Base: styled.article`...`,
    Header: styled.header`...`,
    Content: styled.main`...`,
    Footer: styled.footer`...`
  },
  with: {
    Logo: styled.img: `...`,
    Name: styled.span`...`,
    Company: styled.span`...`,
    Twitter: styled.span`...`
    Type: styled.span`...`
  }
}
```

I use `layout` and `with` to separate components by purpose. To turn this into a layout, you'll likely have something like below:

```javascript
function StyledBadge({
  logoUrl,
  company,
  name,
  twitter,
  type,
}) {
  return (
    <Badge.layout.Base>
      <Badge.layout.Header>
        <Badge.with.Logo src={logoUrl} />
      </Badge.layout.Header>
      <Badge.layout.Content>
        <Badge.with.Name>{name}</Badge.with.Name>
        <Badge.with.Company>{company}</Badge.with.Company>
        <Badge.with.Twitter>{twitter}</Badge.with.Twitter>
      </Badge.layout.Content>
      <Badge.layout.Footer>
        <Badge.with.Type>{type}</Badge.with.Type>
      </Badge.layout.Footer>
    </Badge.layout.Base>
  );
}
```

I know the above looks a little verbose so what's the point?

T> In addition, you would have a way to connect to data somehow but that goes beyond this post.

## Implementing Variants

Let's say you are going to organize another conference. This time around you'll want to display the data in different order or even different data. The most basic change would be to change the layout:

```javascript
function AnotherStyledBadge({ logoUrl, name, type }) {
  return (
    <Badge.layout.Base>
      <Badge.layout.Header>
        <Badge.with.Logo src={logoUrl} />
      </Badge.layout.Header>
      <Badge.layout.Content>
        <Badge.with.Name>{name}</Badge.with.Name>
      </Badge.layout.Content>
      <Badge.layout.Footer>
        <Badge.with.Type>{type}</Badge.with.Type>
      </Badge.layout.Footer>
    </Badge.layout.Base>
  );
}
```

Given you might want stylistic changes as well, you'll need to adjust the components:

```javascript
const AnotherBadge = merge({}, Badge, {
  with: {
    Name: styled(Badge.with.Name)`...`
    Type styled(Badge.with.Name)`...`
  }
})
```

It's important to note, that the `merge` operation you use here should likely retain the old definitions you have (i.e., not lose `Twitter` and others).

The component also needs tuning:

```javascript
function AnotherStyledBadge({ logoUrl, name, type }) {
  return (
    <AnotherBadge.layout.Base>
      <AnotherBadge.layout.Header>
        <AnotherBadge.with.Logo src={logoUrl} />
      </AnotherBadge.layout.Header>
      <AnotherBadge.layout.Content>
        <AnotherBadge.with.Name>
          {name}
        </AnotherBadge.with.Name>
      </AnotherBadge.layout.Content>
      <AnotherBadge.layout.Footer>
        <AnotherBadge.with.Type>
          {type}
        </AnotherBadge.with.Type>
      </AnotherBadge.layout.Footer>
    </AnotherBadge.layout.Base>
  );
}
```

The outcome is quite verbose and visually noisy. Since we already rely on a convention, likely there would be a way to fold this into a simpler structure that connects with the component definition (`AnotherBadge`). The above is what I consider a standard JSX solution. Perhaps the point would be write something like this:

```javascript
function AnotherStyledBadge({ logoUrl, name, type }) {
  return create(AnotherBadge)({
    Base: {
      Header: {
        with: ["Logo", logoUrl],
      },
      Content: {
        with: ["Name", name],
      },
      Footer: {
        with: ["Type", type],
      },
    },
  });
}
```

The `create` function would use the structures to generate the React code. Although I haven't implemented one yet, I can see it's not the most complicated one to write. It's something to experiment with in the future as I develop more layouts.

T> `with` should support arrays of arrays as well as then you could support multiple content nodes within a container. Likely mixed usage (container + content) should be supported in some way too.

## Conclusion

Although the outcome looks verbose without the `create` helper I imagined, it's flexible to modify and it doesn't pollute the namespace of your module. You can keep the hierarchy flatter if you prefer.

The technique can be combined with others. For example, you could consider developing basic primitives around a package like [Styled System](https://styled-system.com/) and then combine those with a style management approach such as this.
