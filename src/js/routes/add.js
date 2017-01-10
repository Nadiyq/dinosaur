function add(ctx, next) {
  render('add', ctx, { filters: Editor.FILTERS, borders: Editor.BORDERS  });

  new Editor('#editor', {
    currentUser: ctx.user,
    onSave: () => {
      page.redirect('/');
    }
  });
  dragAndResize();
}