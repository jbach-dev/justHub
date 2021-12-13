const fastify = require('fastify')({ logger: true })

fastify.register(require('fastify-supabase'), {
  supabaseKey: 'public-anon-key',
  supabaseUrl: 'https://zfrpshsomkhjohepqpwm.supabase.co'
})

fastify.get('/read', async (request, reply) => {
  const { supabase } = fastify

  const { data, error } = await supabase.from('cities').select()

  return { data, error }
})

fastify.listen(3000, err => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})