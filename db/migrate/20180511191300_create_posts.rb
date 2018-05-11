class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :thought
      t.string :feeling
      t.string :body_sensation
      t.integer :thought_rating
      t.integer :feeling_rating
      t.integer :body_sensation_rating
      t.integer :hour_sleep
      t.integer :hour_work
      t.integer :hour_excercise
      t.integer :hour_open
      t.integer :hour_mediate
      t.boolean :acceptance
      t.string :text_body
      t.timestamps
    end
  end
end
