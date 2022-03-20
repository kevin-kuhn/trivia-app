import styles from './styles.module.scss'

interface Props {
  onClick: () => void
  isLoading?: boolean
}
// eslint-disable-next-line react/prop-types
const Button: React.FC<Props> = ({ children, onClick, isLoading = false }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {isLoading ? 'Loading...' : children}
    </button>
  )
}

export default Button
