**Variables**
```css
$primary-color: #333;
```

**Nesting**
```css
nav {
  ul {
    list-style: none;
  }
}
```

**Partials**
a Sass file named with a leading underscore
Sass partials are used with the @import directive
```css
// _reset.scss
@import 'reset';
```

**Mixins**
```css
@mixin transform($property) {
  -webkit-transform: $property;
  -ms-transform: $property;
  transform: $property;
}

.box { @include transform(rotate(30deg)); }
```

**Extend**
```css
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend %message-shared;
  border-color: green;
}
```



