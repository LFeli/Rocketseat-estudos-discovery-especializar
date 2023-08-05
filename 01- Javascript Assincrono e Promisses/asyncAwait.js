const promessa = new Promise(function(resolve, rejected) {
  return resolve('ok')
})

async function start(){
  try{
    const result = await promessa
  } catch (error){
    console.log(error);
  } finally {
    console.log('Sempre irei rodar');
  }


  console.log(result);
}

start()

// promessa
//   .then(function(response){
//     console.log(response);
//   })
//   .catch(function(error){
//     console.log(error);
//   })
//   .finally(function(){
//     console.log('Sempre irei executar');
//   })