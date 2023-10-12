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
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export default about;
