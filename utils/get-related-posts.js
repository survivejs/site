function getRelatedPosts(keywords, pages = [], limit) {
  const ret = {}; // keyword -> posts

  (keywords || []).forEach(keyword => {
    if (!ret[keyword]) {
      ret[keyword] = [];
    }

    (pages || []).forEach(page => {
      if (page.keywords && page.keywords.indexOf(keyword) >= 0) {
        if (ret[keyword].length > limit) {
          return;
        }

        ret[keyword].push(page);
      }
    });
  });

  return ret;
}

export default getRelatedPosts;
