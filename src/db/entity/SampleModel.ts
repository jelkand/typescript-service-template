import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity()
export class SampleModel extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  attribute!: string
}
