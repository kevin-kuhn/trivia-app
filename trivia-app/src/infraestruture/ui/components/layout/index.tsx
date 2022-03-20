/* eslint-disable react/prop-types */
import styles from './styles.module.scss'
import { GenericError } from '../../../../domain/types/GenericError'

import Dompurify from 'dompurify'

interface Props {
  title: string
  actionButton?: React.ReactNode
  error?: GenericError
}

const Layout: React.FC<Props> = ({ title, actionButton, children, error }) => {
  return (
    <div className={styles.divWrapper}>
      {error?.hasError && <div className={styles.error}>{error?.message}</div>}
      <h1
        className={styles.h1}
        dangerouslySetInnerHTML={{
          __html: Dompurify.sanitize(title)
        }}
      />
      <section className={styles.section}>{children}</section>
      <div className={styles.divAction}>{actionButton ?? ''}</div>
    </div>
  )
}

export default Layout
