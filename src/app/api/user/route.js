import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(req) {
    try {
        const body = await req.json()
        const { fullName, email, phone, address } = body.data_diri
        const { name, addrss, contact, description } = body.data_toko

        // check if email already exists
        const existingUserByEmail = await db.user.findUnique({ where: { email } })
        if (existingUserByEmail) {
            return NextResponse.json({ user: null, message: "This is email is already registered" }, { status: 409 })
        }

        // check is phone number already in use
        if (phone) {
            const existingUserByPhone = await db.user.findUnique({ where: { phone } });
            if (existingUserByPhone) {
                return NextResponse.json({ user: null, message: "Phone number already in use" }, { status: 409 });
            }
        } else {
            // Handle jika phone undefined
            return NextResponse.json({ user: null, message: "Phone number is undefined" }, { status: 400 });
        }

        // check is store contact is already in use
        if (contact) {
            const existingStoreByPhone = await db.toko.findUnique({ where: { contact } });
            if (existingStoreByPhone) {
                return NextResponse.json({ user: null, message: "Store contact already in use" }, { status: 409 });
            }
        }

        const newUser = await db.user.create({
            data: {
                fullName,
                email,
                address,
                phone,
                toko: {
                    create: {
                        name,
                        address: addrss,
                        contact,
                        description
                    }
                }
            }
        })


        return NextResponse.json({ data: { newUser }, message: "Created 1 user, toko" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ data: null, message: error.message }, { status: 500 })
    }
}

export async function GET(req) {
    console.log(req);
    return NextResponse.json({ ok: true })
}