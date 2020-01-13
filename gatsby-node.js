exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions

    if (page.path.match(/^\/dashboard/)) {
        page.matchPath = "/dashboard/*"
        createPage(page)
    }
}