const args = process.argv.slice(2)

const simpleTimer = () => {
  // let timer = args.sort((a, b) => a - b)[0] * 1000
  // console.log(`timer is: ${timer}`)
  args.forEach((beep) => {
    // console.log(`beep is: ${beep}`)
    if(beep === Number || beep > 0){
      let timer = beep * 1000;
      setTimeout(() => {
        process.stdout.write('*');
      }, timer)
      // console.log(`beep is: ${beep}`)
      timer = beep;
      // console.log(`timer is: ${timer}`)
    }
  })
}

simpleTimer(args)





