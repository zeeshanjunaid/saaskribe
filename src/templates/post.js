import React from "react"
import Layout from "../components/layout"

const Post = props => {
  const { slug, id, title, content, date } = props.pageContext
  return (
    <Layout>
      <div className="post-template">post slug: {title}</div>
    </Layout>
  )
}

export default Post
