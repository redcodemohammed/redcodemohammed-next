export default defineEventHandler(async (event) => {
  const body = await readBody<IContactRequest>(event)

  const {
    public: { FORMS_API_KEY, FORM_ID }
  } = useRuntimeConfig()

  await fetch(`https://f-bh3i.onrender.com/forms/${FORM_ID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': FORMS_API_KEY
    },
    body: JSON.stringify(body)
  })

  return body
})
