import React, { useEffect, useState } from 'react'
import { CompanyCompData } from '../../company';
import { getCompData } from '../../api';
import CompFinderItem from './CompFinderItem/CompFinderItem';
import Spinner from '../Spinner/Spinner';

type Props = {
    ticker: string;
}

const CompFinder = ({ticker}: Props) => {
    const [companyData, setCompanyData] = useState<CompanyCompData[]>([]);
    useEffect(() => {
        const getComps = async () => {
            const value = await getCompData(ticker!);
            if (value?.data) {
                setCompanyData(value.data);
            }
        };
        getComps();
    }, [ticker]);
  return (
    <div className='inline-flex rounded-md shadow-sm m-4'>
            {companyData.map((ticker) => {
                return <CompFinderItem ticker={ticker.symbol} />
            })}
    </div>
  )
}

export default CompFinder