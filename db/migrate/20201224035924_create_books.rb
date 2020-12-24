class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title
      t.text :author
      t.text :description
      t.integer :num_pages
      t.text :genre
      t.timestamps
      t.references :user
    end
  end
end
