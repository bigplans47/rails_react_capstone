Post.delete_all

Post.create! (
  [
    {
      thought: 'Calm, imaginative',
      feeling: 'Rushed',
      body_sensation: 'Tension in shoulder',
      thought_rating: 3,
      feeling_rating: 2,
      body_sensation_rating: 2,
      hour_sleep: 9,
      hour_work: 8,
      hour_excercise: 0,
      hour_open: 2,
      hour_mediate: 1,
      acceptance: true,
      text_body: 'Mindful to take break and enjoy apple at morning snack. This day had a good success of starting a project but noticed some hesitation with building additional pieces, felt rushed to add on more'
    },
    {
      thought: 'Busy, many ideas',
      feeling: 'Excited',
      body_sensation: 'Tension in legs',
      thought_rating: 2,
      feeling_rating: 3,
      body_sensation_rating: 2,
      hour_sleep: 8,
      hour_work: 10,
      hour_excercise: 0,
      hour_open: 1,
      hour_mediate: 1,
      acceptance: true,
      text_body: 'Mindful to enjoy afternoon snack of Larabar'
    },
    {
      thought: 'Calm in morning, rushed in afternoon',
      feeling: 'Confident',
      body_sensation: 'none',
      thought_rating: 2,
      feeling_rating: 3,
      body_sensation_rating: 2,
      hour_sleep: 8,
      hour_work: 10,
      hour_excercise: 0,
      hour_open: 2,
      hour_mediate: 1,
      acceptance: true,
      text_body: 'Mindful to appreciate walk outside in afternoon, felt warmth of sun'
    },
    {
      thought: 'Routine but not much creativity',
      feeling: 'Tired, not enough sleep',
      body_sensation: 'Back stiff',
      thought_rating: 2,
      feeling_rating: 1,
      body_sensation_rating: 1,
      hour_sleep: 5,
      hour_work: 10,
      hour_excercise: 0,
      hour_open: 1,
      hour_mediate: 1,
      acceptance: true,
      text_body: 'Made effort to mediate, kept drifting to sleep, will focus on sleeping tonight'
    },
    {
      thought: 'Clear and focused on work',
      feeling: 'Comfortable, rested',
      body_sensation: 'Loose shoulders, calm',
      thought_rating: 3,
      feeling_rating: 3,
      body_sensation_rating: 3,
      hour_sleep: 9,
      hour_work: 7,
      hour_excercise: 0,
      hour_open: 3,
      hour_mediate: 1,
      acceptance: true,
      text_body: 'Focus on sleep was good this night was good, enjoyed social event and felt present'
    },
  ]
)
puts "Posts seeded!"
