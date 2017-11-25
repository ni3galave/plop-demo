/* @author Nitin */

//package name
import java.util.HashMap;
import java.util.Map;

public enum MyEnum {

  ROLE_USER(1),
		ROLE_ADMIN(2),
		ROLE_SYS_ADMIN(3),
		RISK_HIGH(1),
		RISK_MEDIUM(2),
		RISK_LOW(3),
		DEVICE_TYPE_IPHONE(1),
		DEVICE_TYPE_ANDROID(2),
		DEVICE_TYPE_IPHONE(3),
		DEVICETYPE_IPAD(4),
		DEVICETYPE_IPOD(5),
		DEVICETYPE_BROWSER(6);
  private final Integer value;

  private static Map<Integer, MyEnum> valueToTextMapping;
  public static Object getText(Integer i){
      if(valueToTextMapping == null){
          initMapping();
      }
      return valueToTextMapping.get(i);
  }

  private static void initMapping(){
      valueToTextMapping = new HashMap<Integer, MyEnum>();
      for(MyEnum s : values()){
          valueToTextMapping.put(s.value, s);
      }
  }

  public Integer getValue(){
      return value;
  }
  private static final Map<Integer, MyEnum> MY_MAP = new HashMap<Integer, MyEnum>();

  static {
    for (MyEnum myEnum : values()) {
      MY_MAP.put(myEnum.getValue(), myEnum);
    }
  }

  public static MyEnum getByValue(int value) {
    return MY_MAP.get(value);
  }

  private MyEnum(int value) {
    this.value = value;
  }
}
