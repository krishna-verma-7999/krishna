const about = {
  name: "about",
  title: "About Me",
  type: "document",
  fields: [
    {
      name: "profile",
      title: "Profile Pic",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "cover_text",
      title: "Cover Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "about",
      title: "About",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default about;
