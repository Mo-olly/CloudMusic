module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import' , {
      libraryName: 'vant' ,
      libraryDirextory: 'es' ,
      style: true
    }, 'vant' ]
  ]
}
