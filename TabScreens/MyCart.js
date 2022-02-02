import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import { useGlobalContext } from '../Components/context';
import { AntDesign } from '@expo/vector-icons';
const MyCart = () => {
  const { cart, empty, count, setCount, setCart } = useGlobalContext();
  const totalvalue = cart
    .map((item) => {
      const { price } = item;
      const value = price.slice(0, price.length - 1);
      console.log(value);
      return price;
    })
    .reduce((total, value) => {
      return total + value;
    }, 0);
  const addItem = (num) => {
    cart.map((item) => {
      if (item.id === num) {
        return setCount(count + 1);
      }
    });
  };
  const decreaseItem = (num) => {
    cart.map((item) => {
      if (item.id === num) {
        if (count > 1) {
          return setCount(count - 1);
        }
      }
    });
  };
  const removeItem = (id) => {
    setCart(() => {
      const filtered = cart.filter((item) => {
        item.id !== id;
      });
      return filtered;
    });
  };
  console.log(cart);
  return (
    <ScrollView>
      <View style={{ margin: 25 }}>
        {empty ? (
          <Text>No items in the Cart</Text>
        ) : (
          cart.map((item, index) => {
            console.log(item.id);
            const { id, title, imageUrl, price } = item;

            return (
              <View key={index} style={styles.container}>
                <Image source={{ uri: `${imageUrl}` }} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
                {/* <View style={styles.icons}>
                  <Pressable onPress={() => decreaseItem(id)}>
                    <AntDesign name="minuscircle" size={24} color="black" />
                  </Pressable>

                  <Text style={{ marginLeft: 15, marginRight: 15 }}>
                    {count}
                  </Text>
                  <Pressable onPress={() => addItem(id)}>
                    <AntDesign name="pluscircle" size={24} color="black" />
                  </Pressable>
                </View> */}
                <Text style={{ flexDirection: 'row', alignSelf: 'center' }}>
                  {price}
                </Text>
                <Pressable
                  style={{ alignSelf: 'flex-end', marginRight: 15 }}
                  onPress={() => removeItem(id)}
                >
                  <Text>RemoveItem</Text>
                </Pressable>
              </View>
            );
          })
        )}
        <Text>Total : {totalvalue}</Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 100,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    alignSelf: 'center',
    marginLeft: 15,
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
  icons: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignSelf: 'center',
    flex: 1,
  },
});
export default MyCart;
