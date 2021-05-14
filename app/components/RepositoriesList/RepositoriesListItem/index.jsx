import React from "react"
import styles from "./styles.module.scss"
import Link from "next/link"

const RepositoriesListItem = ({ name, description }) => (
  <li>
    <Link
      href="/repositories/[name]"
      as={`/repositories/${name.toLowerCase()}`}
    >
      <a className={styles[`repository`]} data-testid="list-item-link">
        <span className={styles["repository__title"]}>{name}</span>
        <span className={styles["repository__description"]}>{description}</span>
      </a>
    </Link>
  </li>
)

export default RepositoriesListItem
