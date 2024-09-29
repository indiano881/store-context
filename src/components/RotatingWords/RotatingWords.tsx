import styles from './RotatingWords.module.css'

export default function RotatingWords() {
  return (
    <section className="w-full bg-pt-primary flex flex-col items-center">
      <div className={styles.wrapper}>
        <h1 className=" text-pt-secondary">Pandorum <span className='text-white'>is</span></h1>
        <div className={styles.words}>
          <div className="text-white">
            <h1 className=" text-pt-secondary">luxury</h1> 
            <h1>beauty</h1>
            <h1>groceries</h1>
            <h1>clothes</h1>
            <h1>accessories</h1>
            <h1>more</h1>
          </div>
        </div>
      </div>
    </section>
  )
}
