export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6218db110fed35c98371aa54",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-e1qkwyzy",
                  apiId: "37cdfcde-5ca1-4149-a8e9-03518e442939",
                },
                {
                  buildHookId: "6218db12ba5abacdfb84ab9e",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-5g9n5nir",
                  apiId: "91bfaefe-59c7-4152-ae09-4a79729fcd2f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/davidfriar/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-5g9n5nir.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
