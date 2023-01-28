export default defineEventHandler(async (event) => {
  const body = await readBody<IContactRequest>(event)

  const {
    public: { BOT_TOKEN, CHAT_ID }
  } = useRuntimeConfig()
  if (BOT_TOKEN) {
    // build the message
    const message = `${body.name} \n${body.email} \n

    ------
    
     ${body.message}\n`

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?text=${message}&chat_id=${CHAT_ID}`)
  }

  return body
})
