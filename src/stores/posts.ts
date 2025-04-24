import { defineStore } from "pinia";

export const usePostsStore = defineStore("posts", {
  state: () => [
    {
      id: 2,
      title: "react",
      content: "it is react",
      tags: [],
      author: {
        id: 1,
        login: "vitalik",
        avatarUrl: null,
      },
    },
    {
      id: 1,
      title: "javascript",
      content: "it is javascript",
      tags: [],
      author: {
        id: 1,
        login: "vitalik",
        avatarUrl: null,
      },
    },
    {
      id: 3,
      title: "vue",
      content: "it is vue ",
      tags: [],
      author: {
        id: 1,
        login: "vitalik",
        avatarUrl: null,
      },
    },
  ],
});
