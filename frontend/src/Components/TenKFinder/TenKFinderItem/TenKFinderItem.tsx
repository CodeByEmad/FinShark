import React from 'react'
import { CompanyTenK } from '../../../company'
import { Link } from 'react-router-dom'

type Props = {
    tenK: CompanyTenK
}

const TenKFinderItem = ({tenK}: Props) => {
    const fillingDate = new Date(tenK.filing_date).getFullYear();
    const htmlUrl = tenK.filing_url.replace(
      /\/([\d-]+)\.txt$/,
        (_, accession) =>
            `/${accession.replace(/-/g, '')}/${tenK.ticker.toLowerCase()}-${tenK.period_end.replace(/-/g, '')}.htm`
    );
  return <Link
            reloadDocument
            to={htmlUrl}
            type="button"
            className='inline-flex items-center p-4 text-md text-white bg-lightGreen rounded-md'
  >
     10K - {tenK.ticker} - {fillingDate}
  </Link>
}

export default TenKFinderItem