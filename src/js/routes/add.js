
function add(ctx, next) {
  render('add', { filters: Editor.FILTERS, borders: Editor.BORDERS });
  new Editor('#editor');

}
