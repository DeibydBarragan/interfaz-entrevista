import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.main className="flex flex-col lg:flex-row"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1,
        delay: 0.3
      }}
    >
      <motion.div className="flex flex-col gap-3 p-4 bg-indigo-950 lg:w-2/4 rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg">
        <h1 className="text-white text-3xl font-bold text-center">
          Ejercicio Z
        </h1>
        <motion.div className='flex flex-col gap-3'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.6
          }}
        >
          <span>
            Se define una función que recibe un string y retorna si solo tiene letras con una expresión regular.
          </span>
          <span>
            Se define la función imprimirCuadrado que recibe una cadena de texto, en ella se convierte la palabra a mayusculas, y se saca la longitud de la palabra, después se determina que la longitud sea mayor a 0, de lo contrario imprimirá un error porque es un valor invalido y se acaba el programa.
          </span>
          <span>
            Se imprime la parte superior del cuadrado solo imprimiendo la palabra en mayusculas.
          </span>
          <span>
            Se define un ciclo for que recorre la longitud de la palabra - 1, después declara la variable fila con el valor de la letra que esté recorriendo de la cadena, se hace un ciclo for anidado para añadir espacios entre la letra y la siguiente y por último se le concatena a la fila la letra y se imprime la fila.
          </span>
          <span>
            Si la longitud es mayor a 1 entonces se imprime la parte inferior del cuadrado solo imprimiendo la palabra en mayusculas pero con los metodos split para convertirla en un array, después con el método reverse se invierte el orden y con join vuelve a ser un string.
          </span>
          <span>
            Se llama al módulo readline para poder leer la entrada de datos por consola en Node.
          </span>
          <span>
            Se define rl como la interfaz de entrada y salida de datos, después se llama a su metodo question para pedir la palabra al usuario y se define una función callback que recibe la palabra como parámetro y la imprime en el cuadrado usando la función definida anteriormente.
          </span>
          <span>
            Por último con el método close se cierra la interfaz de entrada y salida de datos.
          </span>
        </motion.div>
      </motion.div>
      <div className="flex flex-col justify-center bg-white lg:w-2/4 rounded-b-lg lg:rounded-bl-none lg:rounded-r-lg p-6">
        <img alt="Imagen del ejercicio Z" className="rounded-lg" src="./ejercicioZ.png"/>
      </div>
    </motion.main>
  )
}
