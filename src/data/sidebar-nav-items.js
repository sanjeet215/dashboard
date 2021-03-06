export default function() {
  return [
    {
      title: "Employee",
      to: "/employee",
      htmlBefore: '<i class="material-icons">people</i>',
      htmlAfter: ""
    },
    {
      title: "Organization",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/organization",
    },
    {
      title: "Department",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/department",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "Blog Posts",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/blog-posts",
    },
    {
      title: "Add New Post",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-post",
    },
    {
      title: "Forms & Components",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
    {
      title: "Tables",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables",
    },
    
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
  ];
}
