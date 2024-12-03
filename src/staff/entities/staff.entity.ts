import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'staffs'})
export class Staff {
    @PrimaryColumn('uuid')
    id: string

    @Column({
        type: 'int',
        unique: true,
    })
    legajo: number

    @Column({
        type: 'int',
        unique: true,
    })
    dni: number
    
    @Column({
        type: 'int',
        unique: true,
    })
    cuil: number

    @Column({
        type: 'varchar',
        length: 100,
    })
    apellido: string

    @Column({
        type: 'varchar',
        length: 100,
    })
    nombre: string;

    @Column({
        type: 'varchar',
        length: 200,
        nullable: true
    })
    direccion: string

    @Column({
        type: 'int',
        nullable: true
    })
    ubigeo_provincia: number

    @Column({
        type: 'int',
        nullable: true
    })
    ubigeo_departamento: number

    @Column({
        type: 'int',
        nullable: true
    })
    ubigeo_localidad:number

    @Column({
        type: 'varchar',
        length: 100,
        nullable: true
    })
    provincia: string

    @Column({
        type: 'varchar',
        length: 100,
        nullable: true
    })
    departamento: string

    @Column({
        type: 'varchar',
        length: 100,
        nullable: true
    })
    localidad: string

    @Column({
        type: 'varchar',
        length: 50,
        nullable: true
    })
    telefono: string

    @Column({
        type: 'varchar',
        length: 50,
        nullable: true
    })    
    celular: string

    @Column({
        type: 'varchar',
        length: 100,
        unique: true,
        nullable: true
    })
    correo: string;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: true
    })
    obra_social: string

//     estado:

//     createAt

//     updateAt
}
