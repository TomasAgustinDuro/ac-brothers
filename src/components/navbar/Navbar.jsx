import styles from "./navbar.module.css"

function Navbar() {
  return (
    <div className={styles.navbarContainer}>
        <h2>
            AC Brothers
        </h2>

        <button>
            Request a quote
        </button>
    </div>
  )
}
export default Navbar