//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Albums')
export class AlbumsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  title: string;

  @Column('date', { nullable: true })
  releaseDate: Date;

  @Column('integer', { nullable: true })
  artist: number;

  @Column('integer', { nullable: true })
  songs: number;
}
