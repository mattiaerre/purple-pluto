((oc, $) => {
  const purplePluto = oc.build({
    baseUrl: 'http://localhost:3030',
    name: 'oc-purple-pluto',
  });
  $('body').append(purplePluto);

  oc.renderUnloadedComponents();
}
)(window.oc, window.jQuery);
