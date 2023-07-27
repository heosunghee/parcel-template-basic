// ESM <--> CommonJS
// import <--> require()
// export <--> module.exports


// import autoprefixer from 'autoprefixer'
const autoprefixer = 

// export
/* 
export {
  plugins: {
    autoprefixer
  }
} 
*/
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
