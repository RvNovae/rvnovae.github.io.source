---
pageClass: home-page
# some data for the components

---

<ProfileSection :frontmatter="$page.frontmatter" />

## Logo

Big thanks to [Zizo](https://twitter.com/nutgateau) for giving my logo that new touch.

## This site

I may be a developer but I'm definitely no designer.

Thanks to [Nordic Giant](https://github.com/nordicgiant2/vue-nice-homepage) for for providing the template this website uses as open source code.

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
