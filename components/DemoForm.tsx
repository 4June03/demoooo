'use client'
import { sendGTMEvent } from "@next/third-parties/google"
import { useState } from "react"

export default function FormDemo() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log("Form submitted:", { name, email })

    sendGTMEvent({ event: 'form_submit', value: {
        name,email
    } })

    // reset form (optional)
    setName("")
    setEmail("")
  }

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }} className="bg-white text-black p-4">
      <h2>Demo Contact Form</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%" }}
             className="border-2"
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%" }}
            className="border-2"
          />
        </div>

        <button type="submit" className="p-1 border-2 w-full rounded-3xl">Submit</button>
      </form>
    </div>
  )
}