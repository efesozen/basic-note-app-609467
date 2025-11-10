import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import type { User } from './user.entity';

@Entity({ name: 'notes' })
export class Note extends BaseEntity {
  @Column()
  title!: string;

  @Column()
  content!: string;

  @Column({ type: 'jsonb', nullable: true })
  tags?: Record<string, unknown>;

  @Column({ type: 'boolean' })
  @Index('idx_notes_is_shared')
  is_shared!: boolean;


@Column({ name: 'user_id' })
  user_id!: string;

  @Index('idx_notes_user_id')
  @ManyToOne('User', 'notes')
  @JoinColumn({ name: 'user_id' })
  user!: User;
}
