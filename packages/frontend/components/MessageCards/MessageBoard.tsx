import React, { useState } from 'react'
import MessageCard from './MessageCard'
import { MessageResponseInterface } from '../../interfaces/message'
import { getMessages } from '../../api/message'
import InfiniteScrolling from '../InfiniteScrolling'
import styles from '../Fanart/styles.module.scss'
import MasonryBoard from '../MasonryBoard'
import Link from 'next/link'

const breakpointColumnsObj = {
  default: 3,
  1160: 2,
  860: 1,
}

export default function MessageBoard() {
  const [messages, setMessages] = useState<MessageResponseInterface[]>()

  return (
    <div className={styles.fanart_board}>
      <div className={styles.header}>
        <h2>Messages from the Community</h2>
        <Link href="/submission">
          <div className={styles.button}>Submit your own</div>
        </Link>
      </div>
      <InfiniteScrolling
        next={getMessages}
        onData={(data) => setMessages(data as MessageResponseInterface[])}
      >
        <MasonryBoard breakpointCols={breakpointColumnsObj}>
          {messages &&
            messages.map((message, i) => <MessageCard key={i} {...message} />)}
        </MasonryBoard>
      </InfiniteScrolling>
    </div>
  )
}
