---
pageClass: home-page
# some data for the components

name: Oliver Kogel
profile: /profile.png

bio: Software Engineering Student
email: rvnovae (at) gmail (dot) com
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

I'm a guy with a passion for music and computers that is also quite interested in languages.
Currently working on obtaining my bachelor's degree in software engineering.

General experience with: **Kotlin, C/C++, PHP and Javascript**

Professional experience with: **C# and Java**

<a href="https://github.com/RvNovae" target="blank">Github</a></br>
<a href="https://twitter.com/RvNovae" target="blank">Twitter</a></br>
<a href="https://instagram.com/rvnovae" target="blank">Instagram</a></br>

## Projects

<ProjectCard image="https://play-lh.googleusercontent.com/JEOnGAiIlyk0Ul07JrXvZ5INReLQiIUC1pq07h8IUmJ1aivNqVMG9Fj9cYQ8hoOj_g=s180-rw">

  **RM-Notifier**

  RM-Notifier is an unofficial tool to help you stay up to date with your favourite streams and DJs on RauteMusik.

  [[Google Play](https://play.google.com/store/apps/details?id=com.rvnovae.rm_notifier)]
  [[Github](https://github.com/RvNovae/rm-notifier-public)]

</ProjectCard>

<ProjectCard image="https://raw.githubusercontent.com/RvNovae/tracklister/master/build/icon.png">

  **Tracklister**

  This utility converts .m3u8, .nml, .csv & .m3u files (exported from Rekordbox, Traktor, Serato and Virtual DJ respectively) into readable tracklists.

  [[Github](https://github.com/RvNovae/tracklister)]

</ProjectCard>

<ProjectCard image="https://camo.githubusercontent.com/7aa7d6dbbd2d676f164da6ed42b0b280ddbadf16936112df70d93bec81ffa8d2/68747470733a2f2f692e696d6775722e636f6d2f4f386754414c622e706e67">

  **olcPGE Tetris**

  A rather imperfect and naive Tetris implementation powered by the [olcPixelGameEngine](https://github.com/OneLoneCoder/olcPixelGameEngine).

  [[Github](https://github.com/RvNovae/olcPGE-tetris)]

</ProjectCard>

<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img
          width 100%
          max-width 400px

</style>

