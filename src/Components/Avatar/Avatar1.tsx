import React from 'react'
import Link from 'next/link'
import { Button, Ul } from './styles'
import { Avatar, Popover } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { fnSignout } from '../../fns/Structure/fnSignout'

type props = {
    name: string,
    menu: {link: string, item: string}[],
    photo: string
}

const Avatar1: React.FC<props> = ({ name, menu, photo }) => {
    const rename = name.length > 7 ? (name.slice(0, 7) + '...') : name

    function signOut(e: any) {
        e.preventDefault()
        fnSignout()
    }

    const content = (<Ul>
            {menu.map((el, index) => (
                <li key={index}>
                    <Link href={el.link}>
                        <a>{el.item}</a>
                    </Link>
                </li>
            ))}
            <li><a href="" id="ant-avatar-signout" onClick={signOut}>Sair</a></li>
        </Ul>)

    return (
        <Popover
            content={content}
            placement="bottomRight"
            trigger="click"
        >
            <Button>
                {photo
                ? <img src={photo} />
                : <Avatar
                    icon={<UserOutlined style={{ color: '#fff' }} />}
                    style={{ backgroundColor: '#6348B3', marginRight: '8px' }} />
                }
                {/* <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" /> */}
                <span>{rename}</span>
            </Button>
        </Popover>
    )
}

export default Avatar1
