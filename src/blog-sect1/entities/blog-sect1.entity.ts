import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";





@Entity()
export class BlogSect1 {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    nombre: string;

    @Column('text')
    email: string;

    @Column('int', {
        default: 0
    })
    telefono: number;


    //? preguntar si es necesario guardar el texto en la base de datos de lo que el cliente pidio 
    @Column('text')
    mensaje: string;

// TODO tratar de conectar la base de datos con sql osea definir las conecxiones a la base 

}
