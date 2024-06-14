import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{unique:true})//(data type, constraint)
    title: string;

    @Column('float',{
        default: 0
    })
    price: number;

    @Column({//otra manera para definir tipos
        type: 'text',
        nullable: true
    })
    description: string;

    @Column('text',{unique:true})
    slug: string;

    @Column('int',{default:0})
    stock: number;

    @Column('text',{array: true})
    sizes: string[];

    @Column('text')
    gender: string;

    @Column('text',{
        array: true,
        default: []
    })
    tags: string[];


    @BeforeInsert()
    checkSlugInsert(){
        if(!this.slug){
            this.slug = this.title.toLowerCase()
                .replaceAll(" ","_").replaceAll("'","");
        }

        this.slug = this.slug.toLowerCase()
                .replaceAll(" ","_").replaceAll("'","");
    }

    @BeforeUpdate()
    checkSlugUpdate(){
        this.slug = this.slug.toLowerCase()
            .replaceAll(" ","_").replaceAll("'","");
    }

}