import postgres from 'postgres';
import { NextRequest } from 'next/server';
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listInvoices() {
	const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

	return data;
}

// export async function GET() {
  
//   try {
//   	return Response.json(await listInvoices());
//   } catch (error) {
//   	return Response.json({ error }, { status: 500 });
//   }
// }
export async function GET(request: Request) {
  
  try {
    const data = await fetch('https://api.vercel.app/blog')
    const posts = await data.json()
 
    return Response.json(posts);
  } catch (error) {
    console.log("error")
  }
}
