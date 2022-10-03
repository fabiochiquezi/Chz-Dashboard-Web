import React from 'react'
import Link from 'next/link'
import { ArrowLeftOutlined } from '@ant-design/icons'

type props = {
    link: string,
    text: string
}

const BackButton: React.FC<props> = ({ link, text }) => {
    return (
        <Link href={link}>
            <a className="back-button absolute left-3 top-3 flex items-center ">
                <div className="back-icon mr-2">
                    <ArrowLeftOutlined style={{ fontSize: '16px', color: '#6348B3' }} />
                </div>
                <p className="text-sm">{text}</p>
            </a>
        </Link>
    )
}

export default BackButton
