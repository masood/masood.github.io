// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-paper-on-evaluating-browser-mechanisms-for-tracking-vectors-was-accepted-at-ndss-2023",
          title: 'Paper on evaluating browser mechanisms for tracking vectors was accepted at NDSS 2023....',
          description: "",
          section: "News",},{id: "news-excited-to-intern-at-brave-software-this-summer",
          title: 'Excited to intern at Brave Software this summer!',
          description: "",
          section: "News",},{id: "news-new-paper-on-dynamic-analysis-of-electron-apps-was-accepted-at-usenix-security-2024",
          title: 'New paper on dynamic analysis of Electron apps was accepted at USENIX Security...',
          description: "",
          section: "News",},{id: "news-new-paper-on-google-s-protected-audience-api-previously-fledge-was-accepted-at-usenix-security-2024-this-work-was-primarily-done-by-giuseppe-calderonio",
          title: 'New paper on Google’s Protected Audience API (previously, FLEDGE) was accepted at USENIX...',
          description: "",
          section: "News",},{id: "news-new-paper-on-the-accuracy-of-apple-privacy-labels-compared-to-privacy-policies-was-accepted-at-pets-2024",
          title: 'New paper on the accuracy of Apple Privacy Labels compared to Privacy Policies...',
          description: "",
          section: "News",},{id: "news-new-paper-on-the-effects-of-apple-privacy-labels-on-users-risk-perception-and-willingness-to-install-ios-apps-was-accepted-at-soups-2024-this-work-was-primarily-done-by-david-balash",
          title: 'New paper on the effects of Apple Privacy Labels on users’ risk perception...',
          description: "",
          section: "News",},{id: "news-new-paper-on-detecting-and-replacing-privacy-harming-code-in-js-bundles-was-accepted-at-ccs-2024-i-primarily-worked-on-this-paper-during-my-internship-at-brave-where-i-had-a-great-time-collaborating-with-and-learning-from-pete-snyder",
          title: 'New paper on detecting and replacing privacy-harming code in JS bundles was accepted...',
          description: "",
          section: "News",},{id: "news-new-paper-on-the-risks-of-migrating-codebases-from-the-web-to-cross-platform-apps-was-accepted-at-pets-2025-this-work-was-primarily-done-by-claudio-paloscia",
          title: 'New paper on the risks of migrating codebases from the web to cross-platform...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%6C%69%39%32@%75%69%63.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/masood", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mirmasoodali", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=tzTgR7IAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
