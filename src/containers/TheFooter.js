import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="/" target="_blank" rel="noopener noreferrer">مرکز رشد</a>
        <span className="ml-1">&copy; تمامی حقوق محفوظ است.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
