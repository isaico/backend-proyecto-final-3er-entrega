# backend-proyecto-final-3er-entrega
## comandos para levantar los servers
 podemos usar tanto PM2 como npm para levantar los servers
## PM2
* pm2 start app.js --name="Server" --watch -- --port 4000 (modo fork)
* pm2 start app.js --name="ServerCluster" --watch -i max -- --port 4001  (modo cluster, remplazar "max" por la cantidad de instancias) 
* pm2 list (lista de servidores)
* pm2 monit (monitoreo de servidores)
* pm2 stop all (frenar los servers)
* pm2 detele all (borrar los servers)
  
## npm
npm start "puerto" "modo" -> por defecto puerto 8081 modo fork

## artillery
# los test los realice a la siguiente ruta  
artillery quick --count 50 -n 25 http://localhost:api/products

en modo fork y modo cluster dando como resultados los archivos de texto

se puede apreciar la diferencia de tiempo media que le  llevo a  cada uno
# modo fork:
* All VUs finished. Total time: 1 minute, 41 seconds
*  median: ...................................................................... 2465.6
 
# modo cluster: 
* All VUs finished. Total time: 1 minute, 5 seconds
*  median: ...................................................................... 1107.9

se puede ver la diferencia de , menos de la mitad para el modo cluster

los realice en esta ruta ya que al no poder solucionar el problema del passport-local  no pude realizar las pruebas de logeo