export const data = (context, callback) => { // eslint-disable-line import/prefer-default-export
  const model = {
    params: {
      trackerTarget: context.params.trackerTarget || 'document',
      painterContainer: context.params.painterContainer || 'document.body',
    },
    staticPath: context.staticPath
  };

  callback(null, model);
};
