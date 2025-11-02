# Backend Data Storage

यह directory सभी backend data को JSON files में store करती है।

## Structure

- `dataStorage.js` - Main data storage utility file जो सभी CRUD operations handle करती है
- `files/` - Directory जिसमें सभी JSON data files हैं

## Data Files

1. **contacts.json** - Contact form submissions
2. **events.json** - School events data
3. **faculty.json** - Faculty members data
4. **gallery.json** - Gallery images data
5. **newsletter.json** - Newsletter subscribers
6. **testimonials.json** - Testimonials data

## Usage

सभी routes अब MongoDB के बजाय file-based storage use करते हैं:

```javascript
const { Contact, Event, Faculty, Gallery, Newsletter, Testimonial } = require('../data/dataStorage');

// Create
const newContact = await Contact.create({ name: 'John', email: 'john@example.com' });

// Read All
const allContacts = await Contact.findAll();

// Read One
const contact = await Contact.findById(id);

// Update
const updated = await Contact.update(id, { status: 'read' });

// Delete
await Contact.delete(id);
```

## Notes

- सभी files automatically create हो जाएंगी जब पहली बार data add किया जाएगा
- Data JSON format में stored है
- Unique IDs automatically generate होते हैं
- Timestamps (createdAt, updatedAt) automatically add होते हैं

