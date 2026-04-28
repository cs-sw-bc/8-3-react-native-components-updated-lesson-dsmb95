# Mobile Development – Lesson 3
## Components, Input, and Interactivity

---

## Project Setup

### 1. Create a new Expo project

```bash
npx create-expo-app lesson3-demo
cd lesson3-demo
```

After scaffolding, verify the SDK version in `package.json` — it should say `"expo": "~54.0.x"`. If it says 52, run:

```bash
npx expo install expo@~54.0.0
```

### 2. Install navigation and React Native packages

```bash
npx expo install @react-navigation/native@^7 @react-navigation/native-stack react-native-screens react-native-safe-area-context expo-asset
```

### 3. Install Babel preset

```bash
npm install babel-preset-expo
```

### 4. Create `babel.config.js` in the project root

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
```

### 5. Copy project files

- Replace `App.jsx` with the one provided
- Copy the `screens/` folder into the project root

### 6. Start the app

```bash
npx expo start --clear
```

Scan the QR code with **Expo Go** on your phone, or press `a` for Android emulator.

> **Note:** Make sure your Expo Go app is SDK 54. If you see a version mismatch warning, run `npx expo install expo` to update.

---

## What We're Covering Today

- Scrollable layouts with `ScrollView`, `SafeAreaView`, and `FlatList`
- Capturing user input with `TextInput`
- Using `Button` and `Alert` for simple interactions
- Touchable components — when to use which one
- In-class exercise: two-screen app with navigation

---

## Section 1: Layout Helpers

### The Problem with Overflow

In React Native, content that overflows the screen doesn't scroll automatically — it just gets clipped. Try this:

```jsx
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View>
      {Array.from({ length: 30 }, (_, i) => (
        <Text key={i}>Line {i + 1}</Text>
      ))}
    </View>
  );
}
```

Run it. Lines beyond the bottom of the screen are gone. To fix this, you need `ScrollView`.

---

### SafeAreaView

Before adding scroll, let's talk about the safe area. On iOS devices with a notch or dynamic island, a plain `View` at the top level will place content underneath the system UI — the status bar, notch, and home indicator.

`SafeAreaView` automatically adds padding to keep your content in the visible "safe" zone on both iOS and Android.

```jsx
import { SafeAreaView, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>This content won't hide behind the notch.</Text>
    </SafeAreaView>
  );
}
```

**Rule of thumb:** use `SafeAreaView` as your outermost container whenever you're building a full-screen layout.

---

### ScrollView

Wrap overflowing content in `ScrollView` to make it scrollable:

```jsx
import { SafeAreaView, ScrollView, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {Array.from({ length: 30 }, (_, i) => (
          <Text key={i} style={{ padding: 12 }}>Line {i + 1}</Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
```

`ScrollView` renders **all** of its children at once — even items that are off-screen. This is fine for short, static content like a settings page or a text article. For long or dynamic lists, use `FlatList`.

**Horizontal scrolling:**

```jsx
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
  <Text style={{ padding: 16 }}>Card 1</Text>
  <Text style={{ padding: 16 }}>Card 2</Text>
  <Text style={{ padding: 16 }}>Card 3</Text>
</ScrollView>
```

Adding `horizontal` turns it into a side-scrolling row — useful for category pills, image carousels, or tab-style navigation.

---

### FlatList

`FlatList` is the performant alternative for long lists. It only renders the items currently visible on screen, recycling components as the user scrolls.

```jsx
import { FlatList, Text, View, StyleSheet } from 'react-native';

const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple', 'Grape', 'Watermelon'];

export default function App() {
  return (
    <FlatList
      data={fruits}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.label}>{item}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontSize: 16,
  },
});
```

**Key props:**

| Prop | Type | What it does |
|---|---|---|
| `data` | Array | The array to render |
| `keyExtractor` | Function | Returns a unique string key for each item |
| `renderItem` | Function | Returns the JSX for each item |
| `ItemSeparatorComponent` | Component | Rendered between items (good for dividers) |
| `ListHeaderComponent` | Component | Rendered above the list |
| `ListEmptyComponent` | Component | Rendered when `data` is empty |

**Empty state example:**

```jsx
<FlatList
  data={[]}
  keyExtractor={(item) => item}
  renderItem={({ item }) => <Text>{item}</Text>}
  ListEmptyComponent={
    <Text style={{ padding: 16, color: '#999' }}>Nothing here yet.</Text>
  }
/>
```

---

### ScrollView vs FlatList — When to Use Which

| Situation | Use |
|---|---|
| Short, static content (settings page, article) | `ScrollView` |
| Unknown-length list (API data, user-generated) | `FlatList` |
| Horizontal row of cards or pills | `ScrollView horizontal` |
| Long list where performance matters | `FlatList` |

---

## Section 2: TextInput

`TextInput` is the React Native equivalent of `<input>` in HTML. You control its value with state — same controlled component pattern you used in React.

### Basic Example

```jsx
import { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Enter your name"
      />
      <Text>Hello, {name || 'stranger'}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
});
```

> `TextInput` has **no visible border by default**. Always add `borderWidth` and `borderColor` in your styles or the field will be invisible.

---

### Common Props

| Prop | What it does |
|---|---|
| `value` | The current value — must come from state |
| `onChangeText` | Called on every keystroke, receives the updated string |
| `placeholder` | Ghost text when the field is empty |
| `placeholderTextColor` | Colour of the placeholder text |
| `secureTextEntry` | Hides characters — use for passwords |
| `keyboardType` | Controls which keyboard appears: `"default"`, `"numeric"`, `"email-address"`, `"phone-pad"` |
| `autoCapitalize` | `"none"`, `"words"`, `"sentences"` (default), `"characters"` |
| `multiline` | Allows multiple lines of text |
| `maxLength` | Caps the number of characters |

---

### Multiple Inputs

When you have more than one field, keep them in a single state object:

```jsx
import { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default function App() {
  const [form, setForm] = useState({ firstName: '', lastName: '' });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={form.firstName}
        onChangeText={(val) => handleChange('firstName', val)}
        placeholder="First name"
      />
      <TextInput
        style={styles.input}
        value={form.lastName}
        onChangeText={(val) => handleChange('lastName', val)}
        placeholder="Last name"
      />
      <Text>Full name: {form.firstName} {form.lastName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  },
});
```

---

### Password Field

```jsx
<TextInput
  style={styles.input}
  value={password}
  onChangeText={setPassword}
  placeholder="Password"
  secureTextEntry={true}
  autoCapitalize="none"
/>
```

---

## Section 3: Button and Alert

### Button

`Button` is a simple, built-in component. It renders as a native button and looks slightly different on iOS vs Android — that's intentional.

```jsx
import { View, Button } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 24 }}>
      <Button
        title="Press Me"
        onPress={() => console.log('Pressed!')}
        color="#6200ea"
      />
    </View>
  );
}
```

**Key props:**

| Prop | What it does |
|---|---|
| `title` | The button label |
| `onPress` | Handler called when pressed |
| `color` | Text colour on iOS, background colour on Android |
| `disabled` | Greys out the button and prevents pressing |

**The limitation of Button:** you cannot change its font size, padding, border radius, or shape. It's intentionally minimal. When you need custom styling, use `TouchableOpacity` or `Pressable`.

---

### Alert

`Alert` opens a native OS dialog — not a browser popup. It looks and feels like a real system alert on both platforms.

```jsx
import { View, Button, Alert } from 'react-native';

export default function App() {
  const handlePress = () => {
    Alert.alert(
      'Hello!',                   // Title
      'You pressed the button.',  // Message (optional)
      [{ text: 'OK' }]            // Buttons array
    );
  };

  return (
    <View style={{ padding: 24 }}>
      <Button title="Show Alert" onPress={handlePress} />
    </View>
  );
}
```

**Multiple buttons:**

```jsx
Alert.alert(
  'Delete item?',
  'This action cannot be undone.',
  [
    { text: 'Cancel', style: 'cancel' },
    {
      text: 'Delete',
      style: 'destructive',
      onPress: () => console.log('Deleted!'),
    },
  ]
);
```

Button styles:
- `'default'` — plain text
- `'cancel'` — bold on iOS, dismisses the dialog
- `'destructive'` — red on iOS, signals a dangerous action

---

### Combining TextInput, Button, and Alert

Here's a complete example that validates input before proceeding:

```jsx
import { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (name.trim() === '') {
      Alert.alert('Missing info', 'Please enter your name before submitting.');
      return;
    }
    Alert.alert('Submitted!', `Welcome, ${name}!`);
    setName('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Your name"
        autoCapitalize="words"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
});
```

---

## Section 4: Touchable Components

You've used `TouchableOpacity` already. Here's the full picture:

| Component | Visual feedback | When to use |
|---|---|---|
| `TouchableOpacity` | Fades on press | Most custom buttons, cards, list items |
| `TouchableHighlight` | Background darkens on press | List items that need a press highlight |
| `TouchableWithoutFeedback` | None | Dismiss keyboard when tapping outside an input |
| `Pressable` | Fully configurable press states | Modern replacement for all of the above |

---

### TouchableOpacity — Recap

```jsx
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CustomButton({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6200ea',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
```

`activeOpacity` controls how faded the button gets when pressed. `0.7` is the default. Lower values give a more dramatic effect.

---

### Pressable — The Modern Approach

`Pressable` gives you direct access to the pressed state, so you can change styles while the user is holding down:

```jsx
import { Pressable, Text, StyleSheet } from 'react-native';

export default function CustomButton({ label, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
      ]}
      onPress={onPress}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6200ea',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: '#3700b3',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
```

The `style` prop on `Pressable` accepts a function that receives `{ pressed }` — a boolean that's `true` while the user's finger is down.

---

## Section 5: Dismissing the Keyboard

When a user taps outside a `TextInput`, the keyboard stays open. The standard fix is to wrap the screen in `TouchableWithoutFeedback` and call `Keyboard.dismiss()`:

```jsx
import { TouchableWithoutFeedback, Keyboard, View, TextInput } from 'react-native';

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, padding: 24 }}>
        <TextInput placeholder="Type something..." />
      </View>
    </TouchableWithoutFeedback>
  );
}
```

This is the standard pattern for any screen with input fields.

---

## In-Class Exercise — Two-Screen Name App

Build a small app where Screen 1 collects a name and Screen 2 displays it. This uses **Expo Router**, which you already have set up.

**File structure:**

```
app/
  index.jsx       ← Screen 1 (input)
  result.jsx      ← Screen 2 (display)
```

---

### Step 1 — Screen 1: Input

In `app/index.jsx`:

```jsx
import { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleNext = () => {
    if (name.trim() === '') {
      Alert.alert('Oops', 'Please enter your name first.');
      return;
    }
    router.push({ pathname: '/result', params: { name } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>What's your name?</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
        autoCapitalize="words"
      />
      <Button title="Next →" onPress={handleNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 32,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    marginBottom: 16,
  },
});
```

**What's happening:**
- `useRouter()` gives you Expo Router's navigation object
- `router.push()` navigates to a new screen
- `params` passes data to the next screen through the URL

---

### Step 2 — Screen 2: Display

In `app/result.jsx`:

```jsx
import { View, Text, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function ResultScreen() {
  const { name } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello, {name}! 👋</Text>
      <Text style={styles.subtext}>Welcome to the app.</Text>
      <Button title="← Go Back" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  greeting: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtext: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
});
```

**What's happening:**
- `useLocalSearchParams()` reads the params passed from the previous screen
- `router.back()` navigates back — same as pressing the device's back button

---

### Step 3 — Extend It

Once the basic flow works, keep going:

1. **Keyboard dismiss** — Wrap Screen 1 in `TouchableWithoutFeedback` so tapping outside the input dismisses the keyboard
2. **Add a last name field** — Capture first and last name separately on Screen 1, display the full name on Screen 2
3. **Style both screens** — Background colours, centred layouts, polished input fields
4. **Add a reset button on Screen 2** — A `TouchableOpacity` that navigates back and clears the name

---

## Reference — Import Cheatsheet

```jsx
// React Native components
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ScrollView,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
  Keyboard,
  StyleSheet,
} from 'react-native';

// Expo Router
import { useRouter, useLocalSearchParams } from 'expo-router';
```
